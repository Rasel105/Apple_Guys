import React from 'react';

const Blogs = () => {
     return (
          <div className='grid grid-cols-2 p-10 text-slate-600'>
               <article className='p-4'>
                    <h1 className='text-2xl'>What is Context API?</h1>
                    <p><span className='text-3xl'>Ans: </span>Context API is the best Feaure in React, Context API provide a way to pass data from parent to child components without props drilling before Context API Developer has to pass data through the props that was so annoying. Each components in Context is context all are aware. Instred of  passing down every single of the tree of components. without needing intermediary helper. Context API is mainly use for accessing data in many nesting components without props</p>
               </article>
               <article className='p-4'>
                    <h1 className='text-2xl'>What is Symantic Tag?</h1>
                    <p><span className='text-3xl'>Ans: </span>In any Language more important think is understand the of the words during communication. And if this a computer to computer communication that would be more critical. right? That why HTML5 privide us more semantic elements which is more understanding every single code. There is Semantic tag means. Meaning of the works and phrases. Simantic elements have a very simple meaning. It's very clear to Developer as well as Browser. Ex: In HTML we have seen div span which are not semantic element because they don't have meaning. On the other hand form, article  are semantic elements bease they have meaning.</p>
               </article>
               <article className='p-4'>
                    <h1 className='text-2xl'>What is Block Elements and Inline Elements?</h1>
                    <p><span className='text-xl'>Ans: Block Elements</span> A Block Element is Always start with a new Line and is's stretches out from the left and right as far as it can. it hold the whole horizontal space of it's parent element. thae height is equal to the content height.</p>
                    <p><span className='text-xl'>Ans: Inline Elements</span> An Inline Element is opposite of the block level element. it does not start with new line. it takes neccessary width it onl the space bounded by the tags defining the HTML element.
                    </p>
               </article>
          </div>
     );
};

export default Blogs;