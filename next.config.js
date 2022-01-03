/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  basePath : "/wedding", 
  async redirects () { 
    return [
      {
        source : "/" , 
        destination : "/wedding/en" , 
        permanent : true , 
        basePath : false ,
      },
      {
        source : "/" , 
        destination : "/en" , 
        permanent : true ,
      }
    ]
  }, 
  // async rewrite () { 
  //   return [
  //     {
  //       source: '/',
  //       destination: '/en',
  //       basePath : false , 
  //     },
  //   ]
  // }
}
