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

interface Props {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    dish?:Dish
    createDish?: UseMutationResult<Dish, Error, DishCreateData>
    updateDish?: UseMutationResult<Dish, Error, UpdateDishData>
}

const DishForm = ({ open, setOpen, dish, createDish, updateDish }: Props) => {

    const access = useAuthStore(s => s.access) || ''
    const { setShow, setType, setMessage } = useNotificationsStore()

    const [disabled, setDisabled] = useState(false)

    const [available, setAvailable] = useState(dish ? dish.available : true)
    const [name, setName] = useState(dish ? dish.name : '')
    const [description, setDescription] = useState(dish ? dish.description : '')
    const [cost, setCost] = useState(dish ? String(dish.cost ): '')
    const [picture, setPicture] = useState(dish ? dish.picture : '')
    const [category, setCategory] = useState(dish ? dish.category : 0)

    const [nameError, setNameError] = useState('')
    const [descriptionError, setDescriptionError] = useState('')
    const [costError, setCostError] = useState('')
    const [pictureError, setPictureError] = useState('')
    const [categoryError, setCategoryError] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()
        setDisabled(false)
        setNameError('')
        setDescriptionError('')
        setCostError('')
        setPictureError('')

        if (!name) {
            setNameError('Name is required')
            return
        }

        if (!description) {
            setDescriptionError('Description is required')
            return
        }

        if (!cost) {
            setCostError('Cost is required')
            return
        }

        if (!picture) {
            setPictureError('Picture is required')
            return
        }

        if (!category) {
            setCategoryError('Category is required')
            return
        }

        createDish && createDish.mutate({
            dish: {
                available,
                name,
                description,
                cost: parseInt(cost),
                picture,
                category
            },
            access
        }, {
            onSuccess: () => {
                setShow(true)
                setType('success')
                setMessage('Dish created')
                setName('')
                setDescription('')
                setCost('')
                setPicture('')
            },
            onError: err => {
                setShow(true)
                setType('error')
                setMessage(`Error: ${err}`)
                setDisabled(true)
            }
        })

        if (dish) {
            updateDish && updateDish.mutate({
                dish: {
                    ...dish,
                    available,
                    name,
                    description,
                    cost: parseInt(cost),
                    picture,
                    category
                },
                access
            }, {
                onSuccess: () => {
                    setShow(true)
                    setType('success')
                    setMessage('Dish updated')
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
        onClose={() => {
            setOpen(false)
            setDisabled(false)
        }}
    >
        <form 
            className="flex flex-col justify-center items-center mx-auto gap-6 w-[60%] my-6"
            onSubmit={handleSubmit}>
            <h2 className="text-2xl font-poppins font-bold">{dish ? 'Update Dish' : 'New Dish'}</h2>
            <Switch 
                value={available}
                setter={setAvailable}
                label="Available"
            />
            <Input 
                placeholder="Name"
                value={name}
                onChange={e => {
                    name && setNameError('')
                    setName(e.target.value)}}
                error={nameError}
            />
            <TextArea 
                placeholder="Description"
                value={description}
                onChange={e => {
                    description && setDescriptionError('')
                    setDescription(e.target.value)
                }}
                error={descriptionError}
            />
            <Input 
                placeholder="Cost"
                value={cost}
                onChange={e => {
                    cost && setCostError('')
                    setCost(e.target.value)
                }}
                error={costError}
            />
            <Input 
                placeholder="Picture"
                value={picture}
                onChange={e =>{
                    picture && setPictureError('')
                    setPicture(e.target.value)
                }}
                error={pictureError}
            />
            <CategorySelector 
                setSelectedCategory={setCategory}
                categoryId={dish?.category}
                error={categoryError}
            />
            <Button 
                label={dish ? 'Update' : 'Create'}
                disable={disabled}
            />
        </form>
    </Modal>
  )
}

export default DishForm