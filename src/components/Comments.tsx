
import { CommentSection } from 'react-comments-section'
import 'react-comments-section/dist/index.css'

import React, { useState } from 'react';
import { Rating } from 'primereact/rating';





export function F (){

    const data =[
        {
          userId: '02b',
          comId: '017',
          fullName: 'Lily',
          userProfile: 'https://www.linkedin.com/in/riya-negi-8879631a9/',
          text: 'I love this book ❤️❤️ ',
          avatarUrl: 'https://ui-avatars.com/api/name=Lily&background=random',
          replies: []
        }
      ]
 

  return <>
  <div className="flex flex-row flex-wrap p-5 m-2" >
  <div className='mr-4'>< img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1660273739i/11870085.jpg" alt="" width={250} height={250}/></div> 
  <div className='pt-5'> <Rating value={2} readOnly stars={5} cancel={false} /><h5>Book Name : The Fault in Our Stars</h5> <h5>Author : John Green
</h5> <h5>First published: January 10, 2012</h5> <h5>Discription :   The Fault In Our Stars is a fabulous book about a young teenage girl who has been <br/> diagnosed with lung cancer and attends a cancer support group</h5></div></div><CommentSection
      currentUser={{
          currentUserId: '01a',
          currentUserImg: 'https://cdn-icons-png.flaticon.com/128/747/747376.png',
          currentUserProfile: '',
          currentUserFullName: 'user'
      }}
      logIn={{
          loginLink: 'http://localhost:3000/',
          signupLink: 'http://localhost:3000/'
      }}

      onSubmitAction={(data: {
          userId: string
          comId: string
          avatarUrl: string
          userProfile?: string
          fullName: string
          text: string
          replies: any
          commentId: string
      }) => console.log('check submit, ', data)}
      currentData={(data: any) => {
          console.log('curent data', data)
      } } commentData={data} /><div></div></>
    }




    
    export function F2 (){

        const data =[
            {
              userId: '02b',
              comId: '017',
              fullName: 'momo',
              userProfile: 'https://www.linkedin.com/in/riya-negi-8879631a9/',
              text: 'wooow recommended 👍',
              avatarUrl: 'https://ui-avatars.com/api/name=Lily&background=random',
              replies: []
            }
          ]


        return <> <div className="flex flex-row flex-wrap p-5 m-2" >
        <div className='mr-4'>< img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1474154022i/3.jpg" alt="" width={250} height={250}/></div>
         <div className='pt-5'> <Rating value={3} readOnly stars={5} cancel={false} /><h5>Book Name : Harry Potter and the Sorcerer's Stone</h5> <h5>Author : J.K. Rowling</h5> <h5>First published : June 26, 1997</h5>
          <h5>Discription : An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself,<br/> his family and the terrible evil that haunts the magical </h5></div></div><CommentSection
            currentUser={{
                currentUserId: '01a',
                currentUserImg: 'https://cdn-icons-png.flaticon.com/128/747/747376.png',
                currentUserProfile: '',
                currentUserFullName: 'user'
            }}
            logIn={{
                loginLink: 'http://localhost:3000/',
                signupLink: 'http://localhost:3000/'
            }}
      
            onSubmitAction={(data: {
                userId: string
                comId: string
                avatarUrl: string
                userProfile?: string
                fullName: string
                text: string
                replies: any
                commentId: string
            }) => console.log('check submit, ', data)}
            currentData={(data: any) => {
                console.log('curent data', data)
            } } commentData={data} /><div></div></>
          }
      
      

          export function F3 (){


            return <> <div className="flex flex-row flex-wrap p-5 m-2" >
            <div className='mr-4'>< img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1642684140i/60167696.jpg" alt="" width={250} height={250}/></div> 
            <div className='pt-5'> <Rating value={5} readOnly stars={5} cancel={false} /><h5>Book Name : Demon Slayer: Kimetsu no Yaiba</h5> <h5>Author : Koyoharu Gotouge</h5> <h5>First published : February 15, 2016</h5> 
            <h5>Discription : Tanjiro sets out on the path of the Demon Slayer to save his sister and avenge his family!
</h5></div></div><CommentSection
                currentUser={{
                    currentUserId: '01a',
                    currentUserImg: 'https://cdn-icons-png.flaticon.com/128/747/747376.png',
                    currentUserProfile: '',
                    currentUserFullName: 'user'
                }}
                logIn={{
                    loginLink: 'http://localhost:3000/',
                    signupLink: 'http://localhost:3000/'
                }}
          
                onSubmitAction={(data: {
                    userId: string
                    comId: string
                    avatarUrl: string
                    userProfile?: string
                    fullName: string
                    text: string
                    replies: any
                    commentId: string
                }) => console.log('check submit, ', data)}
                currentData={(data: any) => {
                    console.log('curent data', data)
                } } commentData={[]} /><div></div></>
              }
          
          
              export function F4 (){


                return <> <div className="flex flex-row flex-wrap p-5 m-2" >
                <div className='mr-4'>< img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1622355533i/4667024.jpg" alt="" width={250} height={250}/></div>
                 <div className='pt-5'> <Rating value={2} readOnly stars={5} cancel={false} /><h5>Book Name : The Help</h5> <h5>Author : Kathryn Stockett</h5> <h5>First published : February 10, 2009</h5>
                  <h5>Discription : In 1960s Mississippi, Southern society girl Skeeter (Emma Stone) <br /> returns from college with dreams of being a writer</h5></div></div><CommentSection
                  
                  currentUser={{
                        currentUserId: '01a',
                        currentUserImg: 'https://cdn-icons-png.flaticon.com/128/747/747376.png',
                        currentUserProfile: '',
                        currentUserFullName: 'user'
                    }}
                    logIn={{
                        loginLink: 'http://localhost:3000/',
                        signupLink: 'http://localhost:3000/'
                    }}
              
                    onSubmitAction={(data: {
                        userId: string
                        comId: string
                        avatarUrl: string
                        userProfile?: string
                        fullName: string
                        text: string
                        replies: any
                        commentId: string
                    }) => console.log('check submit, ', data)}
                    currentData={(data: any) => {
                        console.log('curent data', data)
                    } } commentData={[]} /><div></div></>
                  }
              
                  export function F5 (){


                    return <> <div className="flex flex-row flex-wrap p-5 m-2" >
                    <div className='mr-4'>< img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388183826i/389627.jpg" alt="" width={250} height={250}/></div>
                     <div className='pt-5'> <Rating value={3} readOnly stars={5} cancel={false} /><h5>Book Name : Diary of a Wimpy Kid</h5> <h5>Author : Jeff Kinney</h5>
                      <h5>year publish : First published April 1, 2007</h5> 
                      <h5>Discription : Greg Heffley finds himself thrust into a new year and a new school where undersize weaklings <br />share the corridors with kids who are taller, meaner and already shaving.</h5></div></div><CommentSection
                        currentUser={{
                            currentUserId: '01a',
                            currentUserImg: 'https://cdn-icons-png.flaticon.com/128/747/747376.png',
                            currentUserProfile: '',
                            currentUserFullName: 'user'
                        }}
                        logIn={{
                            loginLink: 'http://localhost:3000/',
                            signupLink: 'http://localhost:3000/'
                        }}
                  
                        onSubmitAction={(data: {
                            userId: string
                            comId: string
                            avatarUrl: string
                            userProfile?: string
                            fullName: string
                            text: string
                            replies: any
                            commentId: string
                        }) => console.log('check submit, ', data)}
                        currentData={(data: any) => {
                            console.log('curent data', data)
                        } } commentData={[]} /><div></div></>
                      }
                  
                      export function F6 (){


                        return <>  <div className="flex flex-row flex-wrap p-5 m-2" >
                        <div className='mr-4'>< img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1602190253i/52578297.jpg" alt="" width={250} height={250}/></div>
                         <div className='pt-5'> <Rating value={4} readOnly stars={5} cancel={false} /><h5>Book Name : The Midnight Library</h5> <h5>Author : Matt Haig
                         </h5> <h5>First published : August 13, 2020</h5>
                         <h5>Discription : Between life and death there is a library, and within that library, the shelves go on forever. <br />
                               Every book provides a chance to try another life you could have lived</h5></div></div>
                            <CommentSection
                            currentUser={{
                                currentUserId: '01a',
                                currentUserImg: 'https://cdn-icons-png.flaticon.com/128/747/747376.png',
                                currentUserProfile: '',
                                currentUserFullName: 'user'
                            }}
                            logIn={{
                                loginLink: 'http://localhost:3000/',
                                signupLink: 'http://localhost:3000/'
                            }}
                      
                            onSubmitAction={(data: {
                                userId: string
                                comId: string
                                avatarUrl: string
                                userProfile?: string
                                fullName: string
                                text: string
                                replies: any
                                commentId: string
                            }) => console.log('check submit, ', data)}
                            currentData={(data: any) => {
                                console.log('curent data', data)
                            } } commentData={[]} /><div></div></>
                          }
                      
                          export function F7 (){
                            return <> <div className="flex flex-row flex-wrap p-5 m-2" >
                            <div className='mr-4'>< img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1476284759i/32075671.jpg" alt="" width={250} height={250}/></div>
                             <div className='pt-5'> <Rating value={1} readOnly stars={5} cancel={false} /><h5>Book Name : The Hate U Give</h5>
                              <h5>Author : Angie Thomas</h5> <h5>First published : February 28, 2017</h5>
                               <h5>Discription : Sixteen-year-old Starr Carter moves between two worlds: the poor neighborhood where <br />
                                she lives and the fancy suburban prep school she attends.</h5></div></div><CommentSection
                                currentUser={{
                                    currentUserId: '01a',
                                    currentUserImg: 'https://cdn-icons-png.flaticon.com/128/747/747376.png',
                                    currentUserProfile: '',
                                    currentUserFullName: 'user'
                                }}
                                logIn={{
                                    loginLink: 'http://localhost:3000/',
                                    signupLink: 'http://localhost:3000/'
                                }}
                          
                                onSubmitAction={(data: {
                                    userId: string
                                    comId: string
                                    avatarUrl: string
                                    userProfile?: string
                                    fullName: string
                                    text: string
                                    replies: any
                                    commentId: string
                                }) => console.log('check submit, ', data)}
                                currentData={(data: any) => {
                                    console.log('curent data', data)
                                } } commentData={[]} /><div></div></>
                              }
                          
                          