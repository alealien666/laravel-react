const isNews = (news) => {
    return news.map((data, i) => {
        return <div key={i} className="card w-full lg:w-96 bg-base-100 shadow-xl">
            <figure><img src="img/haha.jpg" alt="foto" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {data.title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{data.description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-inline">{data.category}</div>
                    <div className="badge badge-outline">{data.author}</div>
                </div>
            </div>
        </div>

    })
}

const noNews = () =>{
    return(
        <div>Saat Ini Tidak Ada Berita Yang Tersedia</div>
    )
}

const newsList = ({ news }) => {
    return !news ? noNews() : isNews(news)

}

export default newsList