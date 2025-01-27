'use client'
import React, { useRef, useState } from 'react'
import { IKImage, ImageKitProvider, IKUpload } from "imagekitio-next";
import config from '@/lib/config';
import Image from 'next/image';
import { toast } from "@/hooks/use-toast"

interface Props {
  type: 'image' | 'video'
  folder: string
  variant: 'dark' | 'light'
  onFileChange: (filePath: string) => void
}

// const { publicKey, urlEndpoint } = config.env.imagekit
const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT;

const FileUpload = ({ type, folder, variant, onFileChange }: Props) => {
  const ikUploadRef = useRef(null)
  const [file, setFile] = useState<{ filePath: string } | null>(null)
  const [progress, setProgress] = useState(0)

  const styles =
  {
    'dark': {
      button: 'bg-dark-300',
      placeholder: 'text-light-100',

    },
    'light':
    {
      button: 'bg-light-600 border-gray-100 border',
      placeholder: 'text-light-100'
    }
  }

  const authenticator = async () => {
    try {
      const response = await fetch(`${config.env.apiEndpoint}/api/auth/imagekit`)

      if (!response.ok) {
        const errorText = await response.text()

        throw new Error(
          `Request failed with status ${response.status}: ${errorText}`
        )
      }

      const data = await response.json()

      const { signature, expire, token } = data
      return { token, expire, signature }
    } catch (error) {
      throw new Error(`Authentication request failed: ${error}`)
    }
  }
  const onError = (error: any) => {
    console.log(error)

    toast({
      title: "Image upload failed",
      description: 'your image coul not be uploaded',
      variant: 'destructive'
    })
  }
  const onSuccess = (res: any) => {
    setFile(res)
    onFileChange(res.filePath)

    toast({
      title: "Image upload successfully",
      description: `${res.filePath} uploaded successfully`,
    })
  }

  return (
    <>
      <ImageKitProvider publicKey={publicKey} urlEndpoint={urlEndpoint} authenticator={authenticator}>
        <IKUpload className='hidden' ref={ikUploadRef}
          onError={onError}
          onSuccess={onSuccess}
          fileName='test-upload.png'
        />

        <button className='upload-btn' onClick={(e) => {
          e.preventDefault()

          if (ikUploadRef.current) {
            // @ts-ignore
            ikUploadRef.current.click()
          }
        }}>
          <Image src='/icons/upload.svg' alt='upload'
            width={20}
            height={20}
            className='object-contain'
          />
          <p className='text-base text-light-100'>Upload a File</p>

          {file && <p className='upload-filename'>{file.filePath}</p>}
        </button>


        {file && (
          <IKImage
            alt={file.filePath}
            path={file.filePath}
            width={500}
            height={500}
          />
        )}
      </ImageKitProvider>
    </>
  )
}

export default FileUpload