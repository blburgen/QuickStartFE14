type Props = {
    date: string,
    description: string
}

export default function Item({date, description}: Props){
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2 col-12">
                    {date}
                </div>
                <div className="col-md-10 col-12">
                    {description}
                </div>
            </div>
        </div>
    )
}