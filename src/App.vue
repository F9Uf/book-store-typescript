<template>
  <div id="app">
    <div id="header" class="fixed flex bg-white border-b border-gray-200 h-16 items-center w-full shadow-sm">
      <div id="nav" class="mx-auto px-6 reactive flex items-center w-full">
        <div id="title" class="mr-auto">
          <h1>Book Store</h1>
        </div>
        <div id="menu" class="ml-auto flex flex-row">
          <router-link class="mx-6" to="/">Home</router-link>
          <router-link class="mx-6" to="/checkout">Check Out</router-link>
        </div>
      </div>
    </div>
    <div id="content" class="pt-20 w-full px-6">
      <router-view />
    </div>
  </div>
</template>