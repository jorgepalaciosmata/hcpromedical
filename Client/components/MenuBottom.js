import React from 'react'

export const MenuBottom = ({navegation}) => {
  return (
    <>
    	<View style={{position:"absolute",bottom:0}}>
			<View style={{ flex: 1, display: 'flex', flexDirection: "row" }}>
				<View style={{ flex: 1, backgroundColor: 'powderblue',justifyContent:"center",alignItems:"center" }}>
				<Button title="Press me"/>
				</View>
				<View style={{ flex: 1, backgroundColor: 'skyblue',justifyContent:"center",alignItems:"center" }}>
				<Button title="Press me"/>
				</View>
				<View style={{ flex: 1, backgroundColor: 'steelblue', justifyContent:"center",alignItems:"center"}}>
				<Button title="Press me"/>
				</View>
				<View style={{flex:1,backgroundColor:"skyblue",justifyContent:"center",alignItems:"center"}}>
					<Ionicons
					name="ios-heart"
					size={24}
					color="white"
					style={{ marginRight: 10 }}/>
				</View>
			</View>
		</View>
    </>
  )
}
