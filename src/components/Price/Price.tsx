import React from 'react'
import { Item } from './Item'



export const Price = () => {
  return (
    <>
        <div className="bg-slate-300 w-screen h-screen">
            <h2 className=" pt-5  mb-4 text-center text-2xl md:text-4xl">Google Chrome Extension Plans</h2>
            <div className="bg-slate-300 flex justify-center flex-wrap">
                <Item title='Free' link='https://boostvocab.com/register' list={['Word Definitions','Up to 10 Lists']} price={0}popular={false} priceof='/mo'/>
                <Item title='Monthly' link='https://buy.stripe.com/5kAdRpbLh3k71RS6oo' 
                    list={['Word Definitions','Unlimited Lists','Directly add words from any site using Chrome Extension']} price={3.99} popular={false} priceof='/mo'/>
                <Item title='Yearly' link='https://buy.stripe.com/aEU6oX3eL6wjdAA7st' 
                    list={['Word Definitions','Unlimited Lists','Directly add words from any site using Chrome Extension']} price={29.99} popular={true} priceof='/year'/>
                <Item title='Lifetime' link='https://buy.stripe.com/4gwfZxbLh8Er54428a' 
                    list={['Word Definitions','Unlimited Lists','Directly add words from any site using Chrome Extension']} price={99} popular={false} priceof=' one time'/>
            </div>
        </div>
    </>
  )
}