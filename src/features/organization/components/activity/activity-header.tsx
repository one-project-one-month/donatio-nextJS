import { Badge } from '@/components/ui/badge'
import ActivitySearchBox from './activity-search-box'
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import ActivityCreateForm from './activity-create-form'

function ActivityHeader() {
  return (
    <div className="space-y-6">
      {/* Header Row */}
      <div className="flex items-center justify-between">
        <h1 className="text-primary text-3xl font-semibold">Activites</h1>
        <Badge variant="outline" className="text-sm text-neutral-500">
          13 Activities
        </Badge>
      </div>

      {/* Actions Row */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex-1">
          <ActivitySearchBox />
        </div>
        <Drawer direction="right">
          <DrawerTrigger asChild>
            <Button className="flex items-center gap-2 w-[220px] py-7 rounded-full">
              <Plus size={18} />
              Create New
            </Button>
          </DrawerTrigger>
          <DrawerContent className="max-w-xl min-w-[600px]">
            <DrawerTitle></DrawerTitle>
            <ActivityCreateForm />
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  )
}

export default ActivityHeader