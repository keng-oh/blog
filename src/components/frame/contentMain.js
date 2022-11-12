import React from "react"

export const ContentMain = props => {
  const { children } = props
  return (
    <main>
      <div class="container w-full md:max-w-3xl mx-auto pt-20">
        <div class="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
          { children }
        </div>
      </div>
    </main>
  )
}
