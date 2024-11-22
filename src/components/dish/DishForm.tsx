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

interface Props {
    createDish: UseMutationResult<Dish, Error, DishCreateData>
}

const DishForm = ({ createDish }: Props) => {

    const access = useAuthStore(s => s.access) || ''
    const { setShow, setType, setMessage } = useNotificationsStore()

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [cost, setCost] = useState('')
    const [picture, setPicture] = useState('')
    const [category, setCategory] = useState(0)

    const [nameError, setNameError] = useState('')
    const [descriptionError, setDescriptionError] = useState('')
    const [costError, setCostError] = useState('')
    const [pictureError, setPictureError] = useState('')
    const [categoryError, setCategoryError] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()

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

        createDish.mutate({
            dish: {
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
            }
        })
    }

  return (
    <form 
        className="flex flex-col justify-center items-center mx-auto gap-4 w-[60%] my-6"
        onSubmit={handleSubmit}>
        <h2 className="text-2xl font-poppins font-bold">New Dish</h2>
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
            error={categoryError}
        />
        <Button 
            label="Create"
        />
    </form>
  )
}

export default DishForm