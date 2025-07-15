import { useQuery } from '@tanstack/react-query'
import { appointmentsApi } from '../api'
import DataTable from '../components/DataTable'
import { Badge } from '@/components/ui/badge'

const Appointments = () => {
  const { data: appointments = [], isLoading, refetch } = useQuery({
    queryKey: ['appointments'],
    queryFn: appointmentsApi.getAll
  })

  const columns = [
    {
      key: 'id',
      label: 'Appointment ID'
    },
    {
      key: 'patientName',
      label: 'Patient'
    },
    {
      key: 'doctorName',
      label: 'Doctor'
    },
    {
      key: 'date',
      label: 'Date',
      render: (value: string) => new Date(value).toLocaleDateString()
    },
    {
      key: 'time',
      label: 'Time'
    },
    {
      key: 'duration',
      label: 'Duration',
      render: (value: number) => `${value} min`
    },
    {
      key: 'type',
      label: 'Type',
      render: (value: string) => (
        <Badge variant="outline">
          {value.replace('_', ' ').toUpperCase()}
        </Badge>
      )
    },
    {
      key: 'status',
      label: 'Status',
      render: (value: string) => (
        <Badge variant={
          value === 'completed' ? 'default' :
          value === 'confirmed' ? 'secondary' :
          value === 'cancelled' ? 'destructive' :
          value === 'no_show' ? 'destructive' : 'outline'
        }>
          {value.replace('_', ' ').toUpperCase()}
        </Badge>
      )
    },
    {
      key: 'createdAt',
      label: 'Scheduled',
      render: (value: string) => new Date(value).toLocaleDateString()
    }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Appointments Management</h1>
        <p className="text-muted-foreground">
          View and manage all patient appointments across all departments
        </p>
      </div>

      <DataTable
        title="All Appointments"
        data={appointments}
        columns={columns}
        searchKeys={['patientName', 'doctorName', 'type', 'status']}
        isLoading={isLoading}
        onRefresh={() => refetch()}
      />
    </div>
  )
}

export default Appointments