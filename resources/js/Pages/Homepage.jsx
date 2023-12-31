import React from 'react';
import { Link, Head } from '@inertiajs/react';
import Navbar from '@/Components/navbar';
import NewsList from '@/Components/homepage/NewsList';
import Paginator from '@/Components/homepage/Paginator';

export default function Homepage(props) {
    return (
        <div className="min-h-screen bg-slite-50">
            <Head title={props.title} />
            <Navbar />
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap
             lg:items-stretch items-center gap-4 p-4">
                <NewsList news={props.news.data} />
            </div>
            <div className = "flex justify-center items-center">
                <Paginator meta={props.news.meta}/>
            </div>
        </div>
    )
}