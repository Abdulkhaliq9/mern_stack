import React from 'react'
import UserLayout from '../layouts/UserLayout'
import Invoice from '../components/checkout/Invoice'

export default function CheckOut() {
  return (
    <UserLayout>
      <Invoice/>
    </UserLayout>
  )
}
