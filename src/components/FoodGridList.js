import React from 'react'
import GridList from 'material-ui/lib/grid-list/grid-list'
import GridTile from 'material-ui/lib/grid-list/grid-tile'
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border'
import IconButton from 'material-ui/lib/icon-button'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    width: 100 + '%',
    height: 100 + '%',
    overflowY: 'auto',
    marginBottom: 24
  }
}

const imagesURL = 'https://raw.githubusercontent.com/MayasHaddad/no-waste-food/master/'
const tilesData = [
  {
    img: imagesURL + 'src/images/img1.jpg',
    title: 'Burgers',
    author: 'Burger Prince'
  },
  {
    img: imagesURL + 'src/images/img2.jpg',
    title: 'Pancakes',
    author: 'Tasty Co.'
  },
  {
    img: imagesURL + 'src/images/img3.jpg',
    title: 'Tagliatelle',
    author: 'Pasta Co.'
  },
  {
    img: imagesURL + 'src/images/img4.jpg',
    title: 'Sandwich',
    author: 'Fast Sandwiches'
  },
  {
    img: imagesURL + 'src/images/img5.jpg',
    title: 'Viennoiseries',
    author: 'Café'
  },
  {
    img: imagesURL + 'src/images/img6.jpg',
    title: 'Fish',
    author: 'Happy Fish'
  },
  {
    img: imagesURL + 'src/images/img7.jpg',
    title: 'Meat',
    author: 'Boucherie'
  },
  {
    img: imagesURL + 'src/images/img8.jpg',
    title: 'Vegetables',
    author: 'Vergers du coin'
  }
]

const FoodGridList = () => (
  <div style={styles.root}>
    <GridList cellHeight={300} style={styles.gridList}>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          subtitle={<span>by <b>{tile.author}</b></span>}
          actionIcon={<IconButton>
            <StarBorder color='white' />
          </IconButton>}>
          <img src={tile.img} />
        </GridTile>
       ))}
    </GridList>
  </div>
)

export default FoodGridList
