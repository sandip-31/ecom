const category = [
    {
        image: 'https://static.thenounproject.com/png/860317-200.png',
        name: 'men\'s',
        value:'men\'s clothing'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/512/3534/3534312.png',
        name: 'women\'s',
        value: 'women\'s clothing'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/512/3659/3659899.png',
        name: 'electronics',
        value: 'electronics'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/512/11339/11339500.png',
        name: 'jewelery',
        value: 'jewelery'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/11946/11946316.png',
        name: 'books',
        value: 'books'
    }
]

const Category = ({ onSelectCategory }) => {
    return (
        <div>
            <div className="flex flex-col mt-5">
                <div className="flex overflow-x-scroll lg:justify-center hide-scroll-bar">
                    <div className="flex">
                        {category.map((item, index) => (
                            <div key={index} className="px-3 lg:px-10">
                                <div
                                    className="w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full bg-gradient-to-r from-[#fab3b4] to-[#ccdde9] transition-all hover:from-[#fab3b4] hover:to-[#fab3b4] cursor-pointer mb-1 flex items-center justify-center"
                                    onClick={() => onSelectCategory(item.value)}>
                                    <img src={item.image} alt="img" className="w-10 h-10 lg:w-16 lg:h-16" />
                                </div>
                                <h1 className='text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase text-gray-800'>{item.name}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <style dangerouslySetInnerHTML={{ __html: ".hide-scroll-bar { -ms-overflow-style: none; scrollbar-width: none;}.hide-scroll-bar::-webkit-scrollbar { display: none;}" }} />
        </div>
    );
};

export default Category;
