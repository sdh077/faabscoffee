import { createServiceClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  const supabase = createServiceClient()
  const { data: article } = await supabase
    .from('learn_article')
    .select('*')
    .eq('id', id)
    .single()

  if (!article) return notFound()

  return (
    <main className='min-h-screen'>
      <div className='border-b'>
        <div className='container py-6 flex items-center justify-between'>
          <Link
            href='/learn'
            className='flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors'
          >
            <ChevronLeft className='w-4 h-4' />
            목록으로
          </Link>
          {article.category && (
            <span className='text-xs text-muted-foreground tracking-widest'>{article.category}</span>
          )}
        </div>
      </div>

      <div className='container px-4 md:px-6 py-8 md:py-16 flex flex-col gap-10 md:gap-12'>
        <div className='flex flex-col gap-5 border-b pb-8'>
          {article.date && (
            <div className='text-xs tracking-widest text-muted-foreground'>{article.date}</div>
          )}
          <h1 className='text-3xl md:text-5xl font-semibold leading-tight'>{article.title}</h1>

          <div className='flex items-start gap-4 pt-2'>
            <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium shrink-0'>
              {article.writer.charAt(0)}
            </div>
            <div className='flex flex-col gap-1'>
              <div className='text-sm font-medium'>{article.writer}</div>
              {article.writer_description && (
                <div className='text-xs text-muted-foreground leading-5'>{article.writer_description}</div>
              )}
            </div>
          </div>
        </div>

        <div
          className='prose prose-neutral max-w-none text-sm md:text-base leading-8 text-foreground/80'
          dangerouslySetInnerHTML={{ __html: article.content ?? '' }}
        />
      </div>
    </main>
  )
}

export default page
