import React from 'react'

function ColorSystem() {
    const data = [
        {
            color: "bg-primary",
            title: "Primary",
            colorCode: "#4e73df"
        },
        {
            color: "bg-success",
            title: "Success",
            colorCode: "#1cc88a"
        },
        {
            color: "bg-info",
            title: "Info",
            colorCode: "#36b9cc"
        },
        {
            color: "bg-warning",
            title: "Warning",
            colorCode: "#f6c23e"
        },
        {
            color: "bg-danger",
            title: "Danger",
            colorCode: "#e74a3b"
        },
        {
            color: "bg-secondary",
            title: "Secondary",
            colorCode: "#858796"
        },
        {
            color: "bg-light",
            title: "Light",
            colorCode: "#f8f9fc"
        },
        {
            color: "bg-dark",
            title: "Dark",
            colorCode: "#5a5c69"
        },
    ]
    return (
        <>
            {/* <!-- Color System --> */}
            <div className="row">
                {data.map((item, index) => {
                    return (
                        <div className="col-lg-6 mb-4" key={index} >
                            <div className={`card ${item.color} text-white shadow`}>
                                <div className="card-body">
                                    {item.title}
                                    <div className="text-white-50 small">{item.colorCode}</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default ColorSystem

