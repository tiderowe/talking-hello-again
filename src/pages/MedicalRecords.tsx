import { useQuery } from '@tanstack/react-query'
import { medicalRecordsApi } from '../api'
import DataTable from '../components/DataTable'
import { Badge } from '@/components/ui/badge'
import { Shield, ShieldOff } from 'lucide-react'

const MedicalRecords = () => {
  const { data: medicalRecords = [], isLoading, refetch } = useQuery({
    queryKey: ['medicalRecords'],
    queryFn: medicalRecordsApi.getAll
  })

  const columns = [
    {
      key: 'id',
      label: 'Record ID'
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
      key: 'recordType',
      label: 'Type',
      render: (value: string) => (
        <Badge variant="outline">
          {value.replace('_', ' ').toUpperCase()}
        </Badge>
      )
    },
    {
      key: 'title',
      label: 'Title'
    },
    {
      key: 'description',
      label: 'Description',
      render: (value: string) => (
        <span className="truncate max-w-[200px] block">
          {value.length > 50 ? `${value.substring(0, 50)}...` : value}
        </span>
      )
    },
    {
      key: 'isConfidential',
      label: 'Privacy',
      render: (value: boolean) => (
        <div className="flex items-center space-x-1">
          {value ? (
            <>
              <Shield className="h-4 w-4 text-destructive" />
              <span className="text-xs text-destructive">Confidential</span>
            </>
          ) : (
            <>
              <ShieldOff className="h-4 w-4 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">Standard</span>
            </>
          )}
        </div>
      )
    },
    {
      key: 'createdAt',
      label: 'Created',
      render: (value: string) => new Date(value).toLocaleDateString()
    }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Medical Records Management</h1>
        <p className="text-muted-foreground">
          Access and manage patient medical records, test results, and clinical notes
        </p>
      </div>

      <DataTable
        title="All Medical Records"
        data={medicalRecords}
        columns={columns}
        searchKeys={['patientName', 'doctorName', 'title', 'description', 'recordType']}
        isLoading={isLoading}
        onRefresh={() => refetch()}
      />
    </div>
  )
}

export default MedicalRecords