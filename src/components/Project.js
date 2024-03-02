import React from 'react'
import ColorSystem from './Colorsystem'

function Project () {

    const data = [
        {
            title : "Server Migration",
            percent : "20%",
            color : "bg-danger"
        },
        {
            title : "Sales Tracking",
            percent : "40%",
            color : "bg-warning"
        },
        {
            title : "Customer Database",
            percent : "60%",
            color : "bg-primary"
        },
        {
            title : "Payout Details",
            percent : "80%",
            color : "bg-info"
        },
        {
            title : "Account Setup",
            percent : "100%",
            color : "bg-success"
        },
    ]
    return(
        // <!-- Content Column -->
        <div className="col-lg-6 mb-4">

     {/* <!-- Project Card Example --> */}
      <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
                                </div>
                                <div className="card-body">

                                    {data.map((item, index)=>{
                                        return (
                                            <div key={index} > 
                                                <h4 className="small font-weight-bold">{item.title} 
                                                <span className="float-right">{item.percent}</span></h4>
                                                <div className="progress mb-4">
                                                   <div className={`progress-bar ${item.color}`} role="progressbar" style={{ width: `${item.percent}`}}
                                                      aria-valuenow={`${item.percent}`} aria-valuemin="0" aria-valuemax="100">
                                                   </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                    <ColorSystem />
                                </div>
                            </div>
                        </div>
                          
    )
}

export default Project



                    