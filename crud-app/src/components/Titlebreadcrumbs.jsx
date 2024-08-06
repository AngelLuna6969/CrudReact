import React from 'react'

const Titlebreadcrumbs = ({title = "Titulo", subtitle = "Subtitulo", breadcrumbs = ["Op1", "Op2"]}) => {
    return (
        <>
            <div className="content-header">
                <div className="container">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0"> { title } <small>{ subtitle }</small></h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                {
                                    breadcrumbs.map((e) => {
                                        return (
                                            <>
                                            <li className="breadcrumb-item"><a href="#">{ e }</a></li>
                                            </>
                                        )
                                    })
                                }
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Titlebreadcrumbs