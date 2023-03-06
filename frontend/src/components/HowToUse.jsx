export const HowToUse = () => {
    return (
        <section className="container flex justify-center items-center max-w-3xl mx-auto my-12">
            <div>
            <ol class="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0">
                <li class="flex items-center text-slate-800 space-x-2.5">
                    <span class="flex items-center justify-center w-8 h-8 border border-gray-600 rounded-full shrink-0">
                        1
                    </span>
                    <span>
                        <h3 class="font-medium leading-tight">Pega la URL</h3>
                        <p class="text-sm">Introduce la url del sitio para optimizar todas sus imagenes.</p>
                    </span>
                </li>
                <li class="flex items-center text-slate-800 space-x-2.5">
                    <span class="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0">
                        2
                    </span>
                    <span>
                        <h3 class="font-medium leading-tight">Utiliza las imagenes</h3>
                        <p class="text-sm">Puedes descargar las imagenes optimizadas o incluso usar el codigo generado.</p>
                    </span>
                </li>
            </ol>
        </div>
    </section>
    )
}