import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { 
  Users, 
  UserCheck, 
  ShoppingCart, 
  Stethoscope, 
  Building2, 
  Pill, 
  Calendar, 
  FileText,
  Activity,
  Menu,
  X
} from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

const navigationItems = [
  {
    title: 'Dashboard',
    href: '/',
    icon: Activity
  },
  {
    title: 'Users',
    href: '/users',
    icon: Users
  },
  {
    title: 'Patients',
    href: '/patients',
    icon: UserCheck
  },
  {
    title: 'Orders',
    href: '/orders',
    icon: ShoppingCart
  },
  {
    title: 'Doctors',
    href: '/doctors',
    icon: Stethoscope
  },
  {
    title: 'Pharmacies',
    href: '/pharmacies',
    icon: Building2
  },
  {
    title: 'Pharmacists',
    href: '/pharmacists',
    icon: Pill
  },
  {
    title: 'Appointments',
    href: '/appointments',
    icon: Calendar
  },
  {
    title: 'Medical Records',
    href: '/medical-records',
    icon: FileText
  }
]

const Sidebar = () => {
  const location = useLocation()
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className={cn(
      "bg-card border-r border-border transition-all duration-300 ease-in-out",
      isCollapsed ? "w-16" : "w-64"
    )}>
      <div className="p-4">
        <div className="flex items-center justify-between mb-8">
          {!isCollapsed && (
            <h1 className="text-xl font-bold text-primary">HMS Admin</h1>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="ml-auto"
          >
            {isCollapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
          </Button>
        </div>

        <nav className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon
            const isActive = location.pathname === item.href
            
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                  isActive 
                    ? "bg-primary text-primary-foreground" 
                    : "text-muted-foreground"
                )}
              >
                <Icon className="h-4 w-4" />
                {!isCollapsed && <span className="ml-3">{item.title}</span>}
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}

export default Sidebar