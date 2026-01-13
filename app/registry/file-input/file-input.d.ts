export interface FilePreview {
  file: File
  url?: string
  isImage: boolean
  error?: string
}

export interface FileKind {
  label: string
  icon: string
  color: string
}

export type AcceptGroup
  = | 'image/*'
    | 'video/*'
    | 'audio/*'
    | 'text/*'

export type AcceptMime
  = | 'image/png'
    | 'image/jpeg'
    | 'image/webp'
    | 'image/gif'
    | 'image/svg+xml'
    | 'video/mp4'
    | 'video/webm'
    | 'audio/mpeg'
    | 'audio/wav'
    | 'audio/ogg'
    | 'application/pdf'
    | 'application/zip'
    | 'application/json'
    | 'text/plain'
    | 'text/csv'
    | 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    | 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'

export type AcceptExtension
  = | '.png'
    | '.jpg'
    | '.jpeg'
    | '.webp'
    | '.gif'
    | '.svg'
    | '.mp4'
    | '.webm'
    | '.mp3'
    | '.wav'
    | '.ogg'
    | '.pdf'
    | '.zip'
    | '.json'
    | '.csv'
    | '.txt'
    | '.docx'
    | '.xlsx'

export type AcceptType
  = | AcceptGroup
    | AcceptMime
    | AcceptExtension
