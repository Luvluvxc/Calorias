//se importa siempre como type
import { categories } from "../data/categoria";

export default function Form() {
  return (
    <form className="space-y-5 bg-amber-50 p-10 rounded-lg" action="">
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category" className="font-bold">Categoria:</label>

        <select
          name=""
          id=""
          className="border border-slate-300 p-2 rounded-lg w-full"
				>
					
          {categories.map((category) => (
						<option
							key={category.id}
              value={category.id}
						>
              {category.name}
            </option>
          ))}
        </select>
			</div>
			<div className="grid grid-cols-1 gap-3">
				<label htmlFor="activity" className="font-bold">Actividad</label>
				<input type="text"
					className="border border-amber-100 p-2 rounded-lg"
					placeholder="Ej. Comida, jugo de naranja, ensalada, Ejercicio, etc"
				/>
				

			</div>
			<div className="grid grid-cols-1 gap-3">
				<label htmlFor="calories" className="font-bold">Actividad</label>
				<input type="number" 
					className="border border-amber-100 p-2 rounded-lg"
					placeholder="Calorias. ej. 300 o 500 kg"
				/>
				

			</div>

			<input type="submit" className="bg-gray-800 hover:bg-blue-800 w-full p-2 font-bold uppercase text-white cursor-pointer"
				value='Guardar Comida o'
			/>

    </form>
  );
}
