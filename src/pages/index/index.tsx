/* eslint-disable @typescript-eslint/naming-convention */
import { ScrollView, View } from '@tarojs/components'
import React, { useContext, useEffect, useCallback, useState } from 'react'

const Index: React.FC = () => {
  return (
    <ScrollView
      scrollY
      style={{ height: '762px' }}
      onScrollToLower={(e) => console.log('onScrollToLower', e)}
    >
      <View style={{ height: 700, background: 'pink', width: '100vw' }} />

        <View
          style={{ height: 200, border: '1px solid red', width: '100vw' }}
        />
        <View
          style={{ height: 200, border: '1px solid green', width: '100vw' }}
        />
        <View
          style={{ height: 200, border: '1px solid red', width: '100vw' }}
        />
        <View
          style={{ height: 200, border: '1px solid green', width: '100vw' }}
        />
        <View
          style={{ height: 200, border: '1px solid red', width: '100vw' }}
        />

    </ScrollView>
  )
}

export default Index
