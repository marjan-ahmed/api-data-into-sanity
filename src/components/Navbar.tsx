import React from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { MdKeyboardArrowDown, MdShoppingCart } from "react-icons/md";  
import Link from 'next/link';

function Navbar() {
  return (
    <div className='w-full h-13 bg-gray-700 text-white flex justify-between items-center px-6 md:px-28'>
        <h1 className='text-2xl font-bold font-[poppins] p-2'>Ecommerce Store</h1>
        <div className='flex justify-end gap-6 items-center'>
        <div className='font-[poppins]'>
        <DropdownMenu >
        <DropdownMenuTrigger>
    <span className="text-sm font-medium flex gap-1 sm:gap-3">Category<MdKeyboardArrowDown size={20} />
    </span>
</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem><Link href={'/mens-clothing'}>Men's Clothing</Link></DropdownMenuItem>
    <DropdownMenuItem><Link href={'/jewelery'}>Jewelery</Link></DropdownMenuItem>
    <DropdownMenuItem><Link href={'/electronics'}>Electronics</Link></DropdownMenuItem>
    <DropdownMenuItem><Link href={'/womens-clothing'}>Women's Clothing</Link></DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
</div>
    <MdShoppingCart size={18} />
    </div>
    </div>
  )
}

export default Navbar;