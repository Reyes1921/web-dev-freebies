import {links} from "@/helpers"
import {HoverEffect} from "@/components/ui/card-hover-effect"

const {menuLinks} = links()

export function Cards() {
  return (
    <div className="max-w-5xl mx-auto px-8 animated fadeInUp">
      <HoverEffect items={menuLinks} />
    </div>
  )
}
