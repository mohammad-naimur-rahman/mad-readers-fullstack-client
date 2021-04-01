import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { GlobalContext } from '../context/GlobalContext';

const AddProductGrid = () => {

    const [imgURL, setimgURL] = useState(null);
    const [uploadStatus, setuploadStatus] = useState('');

    const { register, handleSubmit, errors } = useForm();

    const { loadBooks } = useContext(GlobalContext);
    const onSubmit = data => {
        const bookData = {
            name: data.name,
            author: data.author,
            price: data.price,
            imgURL: imgURL
        }
        const url = `https://apple-custard-53620.herokuapp.com/addBook`;
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookData)
        })
            .then(res => {
                if (res) {
                    loadBooks();
                    alert('A new book added');
                }
            })
    };

    const APIkey = '8cfab13aa1992c9a293df26e6fcbd113';
    const handleUploadImg = e => {
        setuploadStatus('Image is uploading, please wait...');
        const imgData = new FormData();
        imgData.set('key', APIkey);
        imgData.append('image', e.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imgData)
            .then(res => {
                setimgURL(res.data.data.display_url);
                setuploadStatus('Image is uploaded, now you can submit');
            })
            .catch(err => alert(err));
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='p-4 m-2 shadow-lg' style={{ maxWidth: '1200px' }}>
                <h3 className='py-2'>Add Book</h3>
                <div className='d-flex flex-wrap'>
                    <div className="m-2 d-flex flex-column " style={{ width: '400px' }}>
                        <label htmlFor="name"><b>Book name</b></label>
                        <input className='form-control' type='text' name="name" id='name' placeholder='Name' ref={register} required />
                        {errors.name && <span>Book name is required</span>}
                    </div>
                    <div className="m-2 d-flex flex-column " style={{ width: '400px' }}>
                        <label htmlFor="author"><b>Author</b></label>
                        <input className='form-control' type='text' name="author" id='author' placeholder='Author Name' ref={register} required />
                        {errors.author && <span>Author name is required</span>}
                    </div>
                    <div className="m-2 d-flex flex-column " style={{ width: '400px' }}>
                        <label htmlFor="price"><b>Price</b></label>
                        <input className='form-control' type='number' name="price" id='price' placeholder='Price' ref={register} required />
                        {errors.price && <span>Price is required</span>}
                    </div>
                    <div className="m-2 d-flex flex-column " style={{ width: '400px' }}>
                        <label htmlFor="file"><b>Add book cover photo</b></label>
                        <input name="file" id='file' type='file' onChange={handleUploadImg} />
                        {errors.file && <span>Please upload an image</span>}
                        <p className='p-2 text-info'>{uploadStatus}</p>
                    </div>
                </div>
                <input type="submit" className='btn btn-success px-4 m-2' />
            </form>
        </div>
    );
};

export default AddProductGrid;