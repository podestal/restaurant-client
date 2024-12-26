import { useState } from "react"
import Input from "../ui/Input"
import TextArea from "../ui/TextArea"
import { UseMutationResult } from "@tanstack/react-query"
import { DishCreateData } from "../../hooks/api/dish/useCreateDish"
import { Dish } from "../../services/api/dishService"
import useAuthStore from "../../hooks/store/useAuthStore"
import Button from "../ui/Button"
import useNotificationsStore from "../../hooks/store/useNotificationsStore"
import CategorySelector from "../category/CategorySelector"
import Modal from "../ui/Modal"
import { UpdateDishData } from "../../hooks/api/dish/useUpdateDish"
import Switch from "../ui/Switch"
import ImageUploader from "../ui/ImageUploader"
import DiscountSetter from "../ui/DiscountSetter"
import useLanguageStore from "../../hooks/store/useLanguageStore"

interface Props {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    dish?:Dish
    createDish?: UseMutationResult<Dish, Error, DishCreateData>
    updateDish?: UseMutationResult<Dish, Error, UpdateDishData>
}

const DishForm = ({ open, setOpen, dish, createDish, updateDish }: Props) => {

    const lan = useLanguageStore(s => s.lan)
    const access = useAuthStore(s => s.access) || ''
    const { setShow, setType, setMessage } = useNotificationsStore()

    const [disabled, setDisabled] = useState(false)

    const [available, setAvailable] = useState(dish ? dish.available : true)
    const [name, setName] = useState(dish ? dish.name : '')
    const [description, setDescription] = useState(dish ? dish.description : '')
    const [cost, setCost] = useState(dish ? String(dish.cost ): '')
    const [picture, setPicture] = useState<File | null>(null);
    const [category, setCategory] = useState(dish ? dish.category : 0)
    const [discount, setDiscount] = useState(dish ? dish.discount : 0)

    const [preview, setPreview] = useState(dish?.picture_url ? dish.picture_url : '')
    const [discountType, setDiscountType] = useState<"fixed" | "percentage">("fixed")

    const [nameError, setNameError] = useState('')
    const [descriptionError, setDescriptionError] = useState('')
    const [costError, setCostError] = useState('')
    const [pictureError, setPictureError] = useState('')
    const [categoryError, setCategoryError] = useState('')
    const [discountError, setDiscountError] = useState('')

    const handleCloseModal = () => {
        if (!dish) {
            
            setName('')
            setDescription('')
            setCost('')
            setPicture(null)
        }
        setDisabled(false)
        setOpen(false)
        setPreview(dish?.picture_url ? dish.picture_url : '')
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()        

        setDisabled(false)
        setNameError('')
        setDescriptionError('')
        setCostError('')
        setPictureError('')

        let finalDiscount = 0

        if (!name) {
            setNameError(lan === 'EN' ? 'Name is required' : 'Nombre es requerido')
            return
        }

        if (!description) {
            setDescriptionError(lan === 'EN' ? 'Description is required' : 'Descripción es requerida')
            return
        }

        if (!cost) {
            setCostError(lan === 'EN' ? 'Cost is required' : 'Costo es requerido')
            return
        }
        

        if (discount >= 100) {
            setDiscountError(lan === 'EN' ? 'Discount cannot be greater than 100' : 'El descuento no puede ser mayor a 100')
            return
        }

        if (discount !== null) {
            if (discountType === 'fixed' ) {
                finalDiscount = discount
            } else {
                finalDiscount = discount > 0 ? parseFloat(cost) * (discount / 100) : parseFloat(cost) * discount
            }
        }

        if (!category) {
            setCategoryError(lan === 'EN' ? 'Category is required' : 'Categoría es requerida')
            return
        }

        console.log('finalDiscount', finalDiscount);
        

        const formData = new FormData
        formData.append('available', available.toString())
        formData.append('name', name)
        formData.append('description', description)
        formData.append('cost', cost)
        formData.append('discount', finalDiscount.toFixed(2))
        picture && formData.append("picture", picture)
        formData.append('category', category.toString())

        if (createDish) {

            if (picture === null) {
                setPictureError('Picture is required')
                console.log('pictureError', pictureError);
                return
            }

            createDish.mutate({
                dish: formData,
                access
            }, {
                onSuccess: () => {
                    setShow(true)
                    setType('success')
                    setMessage(lan === 'EN' ? 'Dish created' : 'Plato creado')
                    setName('')
                    setDescription('')
                    setCost('')
                    setPicture(null)
                },
                onError: err => {
                    setShow(true)
                    setType('error')
                    setMessage(`Error: ${err}`)
                    setDisabled(true)
                }
            })
        }

        

        if (dish) {
            updateDish && updateDish.mutate({
                dish:formData,
                access
            }, {
                onSuccess: () => {
                    setShow(true)
                    setType('success')
                    setMessage( lan === 'EN' ? 'Dish updated' : 'Plato actualizado')
                    setDisabled(true)
                },
                onError: err => {
                    setShow(true)
                    setType('error')
                    setMessage(`Error: ${err}`)
                    setDisabled(true)
                }
            })
        }
    }

  return (
    <Modal
        isOpen={open}
        onClose={handleCloseModal}
    >
        <form 
            className="flex flex-col justify-center items-center mx-auto gap-6 w-[60%] my-6"
            onSubmit={handleSubmit}>
            <h2 className="text-2xl font-poppins font-bold">{dish ? 'Update Dish' : 'New Dish'}</h2>
            <Switch 
                value={available}
                setter={setAvailable}
                label={lan === 'EN' ? "Available" : 'Disponible'}
            />
            <Input 
                placeholder={lan === 'EN' ? "Name" : 'Nombre'}
                value={name}
                onChange={e => {
                    name && setNameError('')
                    setName(e.target.value)}}
                error={nameError}
            />
            <TextArea 
                placeholder={lan === 'EN' ? "Description" : 'Descripción'}
                value={description}
                onChange={e => {
                    description && setDescriptionError('')
                    setDescription(e.target.value)
                }}
                error={descriptionError}
            />
            <Input 
                placeholder={lan === 'EN' ? "Cost" : 'Costo'}
                value={cost}
                onChange={e => {
                    cost && setCostError('')
                    setCost(e.target.value)
                }}
                error={costError}
            />
            <DiscountSetter 
                discountType={discountType}
                setDiscountType={setDiscountType}
                discount={discount}
                setDiscount={setDiscount}
                error={discountError}
                setError={setDiscountError}
            />
            {preview && <img src={preview} alt={preview} className="w-[200px] h-[100px] object-cover cursor-pointer" />}
            <ImageUploader  
                image={picture}
                setImage={setPicture}
                setPreview={setPreview}
            />
            <CategorySelector 
                setSelectedCategory={setCategory}
                categoryId={dish?.category}
                error={categoryError}
            />
            <Button 
                label={dish ? `${lan === 'EN' ? 'Update' : 'Actualizer'}` : `${lan === 'EN' ? 'Create' : 'Crear'}`}
                disable={disabled}
            />
        </form>
    </Modal>
  )
}

export default DishForm