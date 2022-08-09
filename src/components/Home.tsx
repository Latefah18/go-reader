import { InputText } from "primereact/inputtext";
import React from 'react';
import { Splitter, SplitterPanel } from 'primereact/splitter';


export function Home(){

    




    return(
        
        
        <><div className="card">
            <h5 className="head"> Born to read go to read 🚶📚</h5>
            <Splitter style={{ height: '300px' }}>
                <SplitterPanel className="flex align-items-center justify-content-center " size={20} minSize={10}>

                    <img src="https://images.unsplash.com/photo-1512903491135-76ec8a4510b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=753&q=80" width={250} height={300} alt="" />
                </SplitterPanel>
                <SplitterPanel size={80}>
                    <Splitter layout="vertical">
                        <SplitterPanel className="flex align-items-center justify-content-center bg-yellow-50" size={15}>
                            <p className="topic">A room without books is like a body without a soul.</p>
                        </SplitterPanel>
                        <SplitterPanel size={85}>
                            <Splitter>
                                <SplitterPanel className="flex align-items-center justify-content-center" size={20}>
                                    <img src="https://images.unsplash.com/photo-1511108690759-009324a90311?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" width={200} height={250} alt="" />
                                </SplitterPanel>
                                <SplitterPanel className="flex align-items-center justify-content-center" size={80}>
                                    <img src="https://images.unsplash.com/photo-1618365908648-e71bd5716cba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" width={700} height={250} alt="" />
                                </SplitterPanel>
                            </Splitter>
                        </SplitterPanel>
                    </Splitter>
                </SplitterPanel>
            </Splitter>


        </div><div className="flex flex-row flex-wrap card-container blue-containe p-8">


                <div>ggg</div>



                <div className="head">Best of 2022</div>

            </div></>
 
 


        

    )
}


