import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/infra/sideBar/sidebar'
import { ThemeProvider } from '@/infra/tema/theme-provider'
import { TanstackDevtools } from '@tanstack/react-devtools'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'


import { ModeToggle } from '@/infra/tema/mode-toggle'
import { TanStackQueryProvider } from '@/providers/TanStackQueryProvider'


export const Route = createRootRoute({
  component: () => (
    <TanStackQueryProvider>
      <ThemeProvider defaultTheme="system" storageKey="da-ui-theme">
      <SidebarProvider>
        <AppSidebar />
        <main className='w-screen h-screen'>
          <div className='flex flex-row  items-center justify-start gap-3'>
            <SidebarTrigger className='h-[40px] rounded-none flex flex-row justify-start pl-3' />
            <ModeToggle />
          </div>

          <Outlet />
          <TanstackDevtools
            config={{
              position: 'bottom-left',
            }}
            plugins={[
              {
                name: 'Tanstack Router',
                render: <TanStackRouterDevtoolsPanel />,
              },
            ]}
          />
        </main>
      </SidebarProvider>
    </ThemeProvider>
    </TanStackQueryProvider>
  ),
})
