'use client'
import React, {useState, useEffect} from 'react'

import Card from '../../components/Card'
import Icon from '../../components/Icon'
import Tag from '../../components/Tag'

import users from '../../lib/users.json'
import userPosts from '../../lib/userPosts.json'
import interestList from '../../lib/interests.json'
import ecList from '../../lib/ecItems.json'


type Params = {
    params: {
        username:string;
    }
}

export default function Profile({params: {username}}: Params) {
    const [user, setUser] = useState<User | null>(null);

  useEffect(()=>{
    for (let i = 0; i < users.length; i++) {
      if ((users[i].username) === username) {
        setUser(users[i])
      }
    }
  })

  const name = user ? user.name : 'Default Name';

  return (
    <main className='m-auto flex flex-col gap-5 px-1/6 md:px-[10vw] lg:px-[10vw]'>  
        <div className='flex flex-col gap-5'>
            <img className='rounded-full w-20 h-auto' src='https://lh3.googleusercontent.com/a-/AOh14GgeD4LTuYuvwpMah5byGlk8eREsrmb9xO691yO3VQ=s96-c'/>
            <div className='flex flex-col gap-2'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl'>{name}</h1>
                <div className='flex gap-2'>
                    <Tag type='tag'><b>1</b>follower</Tag>
                    <Tag type='tag'><b>29</b>following</Tag>
                    <Tag type='tag'><b>23</b>posts</Tag>
                    <Tag type='tag'><b>108</b>likes</Tag>
                </div>
                <p>Chapter of @global.girls.convergence And were hiring! Google form will drop soon! If you want to become a general team member, you can also DM us!</p>
            </div>
            <div className='flex flex-wrap gap-3'>
                {interestList.map((item,index)=>(
                    <div key={index} className='flex gap-2 items-center justify-center text-center bg-[#fff] p-2 border-2 border-[var(--clr-grey-300)] rounded-xl'>
                        <img className='w-6' src={item.img}/>
                        <p className='font-medium'>{item.name}</p>
                    </div>
                ))}
               
            </div>
        </div>
        <h2 className='text-lg md:text-xl lg:text-xl tracking-normal'>My Posts</h2>
        <div className='flex flex-col gap-5'>
            {userPosts.map((item,index)=>(
            <div key={index} className='border-2 border-[var(--clr-grey-300)] p-4 rounded-xl flex flex-row gap-5'>
                <div className='w-4 flex flex-col items-center'>
                    <Icon icon='arrow-up' fillColor="black"/>
                    <p className='text-sm font-semibold text-[var(--clr-grey-400)]'>{item.likes}</p>
                    <Icon icon='arrow-down' fillColor="black"/>
                </div>
                <div className="flex flex-col gap-2">
                    <span className='text-sm inline-block flex gap-2'>@{item.userId} • {item.date} <Tag type='tag'>{item.type}</Tag> </span>
                    <h3 className='font-semibold text-lg md:text-xl lg:text-2xl'>{item.title}</h3>
                    <p className='text-sm'>{item.body}</p>
                </div>
            </div>
            ))}
        </div>
        <h2 className='text-lg md:text-xl lg:text-xl tracking-normal'>My Activities</h2>
        
        <div className='flex flex-row flex-wrap gap-3'>
            {ecList.map((item,index)=>(
                <Card key={index}>
                    <h3 className='text-lg md:text-xl lg:text-2xl'>{item.name}</h3>
                    <p className='text-sm'>{item.description}</p>
                    <div className='flex flex-wrap'>
                        <Tag type='pink'>{item.type}</Tag>
                        <Tag type='pink'>{item.location}</Tag>
                        <Tag type='green'>{item.education}</Tag>
                        <Tag type='orange'>{item.duration}</Tag>
                        <Tag type='tag'>{item.subjects}</Tag>
                        
                    </div>
                </Card>
            ))}
        </div>
    </main>
  )
}
