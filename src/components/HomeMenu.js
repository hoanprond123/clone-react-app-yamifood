import React, {useState, useRef} from 'react'
import items from './dataMenu'

const allCategory = ['all', ...new Set(items.map((item) => item.category))]

const HomeMenu = () => {
    const [menuItems, setMenuItems] = useState(items)
    const [categories, setCategory] = useState(allCategory)
    const [color, setColor] = useState(categories[0])

    const filterItems = (category ,index) => {
        setColor(category)
        if(category === 'all') {
            setMenuItems(items)
            return
        }
        const newItems = items.filter(item => item.category === category )
        setMenuItems(newItems)
        
    }



    return (
        <div className="home-menu">
            <div className="home-menu-header grid wide">
                <h1>Special Menu</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
            </div>
            <div className="home-menu-categories grid wide">
                <div className="home-menu-categories-container">
                    {categories.map((category, index) => {
                        return (
                            <button key={index} className={category === color ? 'home-menu-categories-item home-menu-categories-item-active' : 'home-menu-categories-item'}  onClick={() => filterItems(category, index)}>{category}</button>
                        )
                    })}
                </div>
            </div>
            <div className="home-menu-item grid wide">
                <div className="row no-gutters">
                    {menuItems.map((item, index) => {
                        const {title, category, price, img, desc} = item
                        return (
                            <div key={index} className=" col l-4 m-6 c-12">
                                <div className="home-menu-item-container">
                                    <div className="home-menu-item-beside">
                                        <img src={img} alt={desc} />
                                        <div className="home-menu-item-container-content">
                                            <h2>{title}</h2>
                                            <p>{desc}</p>
                                            <span>{price}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default HomeMenu
