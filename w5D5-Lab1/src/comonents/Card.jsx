function Card(props) {
    return (
        <div className="card card-side bg-white px-4 rounded-none border-2 text-black w-[30vw] h-[35vh] max-sm:w-screen">
            <figure className="w-[10vw]">
                <img
                    src={props.image}
                    alt="" />
            </figure>
            <div className="card-body w-[15vw] flex flex-col justify-center items-start">
                <h2 className="card-title">{props.name}</h2>
                <ul className="text-[0.8rem] w-[100%]">
                    <li>{props.list[0]}</li>
                    <li>{props.list[1]}</li>
                    <li>{props.list[2]}</li>
                    <li>{props.list[3]}</li>
                    <li>{props.list[4]}</li>
                </ul>
            </div>
        </div>
    )
}

export default Card