import { useQuery } from '@tanstack/react-query'
import { statsApi } from '../api'
import StatsCard from '../components/StatsCard'
import { 
  Users, 
  UserCheck, 
  ShoppingCart, 
  Stethoscope, 
  Building2, 
  Pill, 
  Calendar, 
  FileText 
} from 'lucide-react'

const Dashboard = () => {
  const { data: stats, isLoading } = useQuery({
    queryKey: ['stats'],
    queryFn: statsApi.getStats
  })

  if (isLoading || !stats) {
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-32 bg-muted animate-pulse rounded-lg"></div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to the Hospital Management System admin dashboard
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="Total Users"
          value={stats.totalUsers}
          subtitle={`${stats.activeUsers} active`}
          icon={Users}
          trend={{ value: 12, isPositive: true }}
        />
        
        <StatsCard
          title="Total Patients"
          value={stats.totalPatients}
          subtitle={`${stats.newPatientsToday} new today`}
          icon={UserCheck}
          trend={{ value: 8, isPositive: true }}
        />
        
        <StatsCard
          title="Pending Orders"
          value={stats.pendingOrders}
          subtitle={`${stats.totalOrders} total orders`}
          icon={ShoppingCart}
          trend={{ value: 5, isPositive: false }}
        />
        
        <StatsCard
          title="Available Doctors"
          value={stats.availableDoctors}
          subtitle={`${stats.totalDoctors} total doctors`}
          icon={Stethoscope}
          trend={{ value: 2, isPositive: true }}
        />
        
        <StatsCard
          title="Today's Appointments"
          value={stats.todayAppointments}
          subtitle={`${stats.totalAppointments} total scheduled`}
          icon={Calendar}
          trend={{ value: 15, isPositive: true }}
        />
        
        <StatsCard
          title="Active Pharmacies"
          value={stats.activePharmacies}
          subtitle={`${stats.totalPharmacies} total pharmacies`}
          icon={Building2}
        />
        
        <StatsCard
          title="Pharmacists"
          value={stats.totalPharmacists}
          subtitle="Licensed pharmacists"
          icon={Pill}
        />
        
        <StatsCard
          title="Medical Records"
          value={stats.totalMedicalRecords}
          subtitle="Patient records"
          icon={FileText}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card p-6 rounded-lg border">
          <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span className="text-sm">New patient registered: John Doe</span>
              <span className="text-xs text-muted-foreground ml-auto">2 min ago</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-info rounded-full"></div>
              <span className="text-sm">Appointment scheduled with Dr. Smith</span>
              <span className="text-xs text-muted-foreground ml-auto">5 min ago</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-warning rounded-full"></div>
              <span className="text-sm">Lab results pending for Patient #1234</span>
              <span className="text-xs text-muted-foreground ml-auto">10 min ago</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span className="text-sm">Prescription filled at Main Pharmacy</span>
              <span className="text-xs text-muted-foreground ml-auto">15 min ago</span>
            </div>
          </div>
        </div>

        <div className="bg-card p-6 rounded-lg border">
          <h2 className="text-xl font-semibold mb-4">System Status</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Database</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-sm text-success">Online</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">API Services</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-sm text-success">Running</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Backup System</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-warning rounded-full"></div>
                <span className="text-sm text-warning">Scheduled</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Security Monitoring</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-sm text-success">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard