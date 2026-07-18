import "./CategoryFilter.css";

function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}) {
  return (
    <div className="category-filter">

      <button
        className={selectedCategory === "all" ? "active" : ""}
        onClick={() => onSelectCategory("all")}
      >
        Todos
      </button>

      {categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? "active" : ""}
          onClick={() => onSelectCategory(category)}
        >
          {category
            .replace("women's clothing", "Feminino")
            .replace("men's clothing", "Masculino")
            .replace("electronics", "Eletrônicos")
            .replace("jewelery", "Joias")}
                </button>
            ))}

            </div>
        );
}

export default CategoryFilter;