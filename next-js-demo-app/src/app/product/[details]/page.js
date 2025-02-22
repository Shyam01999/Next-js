
// "use client"
// import { usePathname, useSearchParams } from "next/navigation";
function ProductDetails({ params, searchParams}) {
  params.then((param) => {
    console.log("param", param)
  })

  searchParams.then((param) => {
    console.log("param", param)
  })
  // const pathName = usePathname(); //to get the url
  // console.log("pathName", pathName);

  // const searchParam = useSearchParams();
  // console.log("searchParam", searchParam.get('details'));

  return (
    <h1>This is a product details page.</h1>
  )
}

export default ProductDetails