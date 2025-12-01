import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/infra/sideBar/sidebar'
import { ThemeProvider } from '@/infra/tema/theme-provider'
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"
import { ApolloProvider } from "@apollo/client/react"
import { Outlet, createRootRoute } from '@tanstack/react-router'

import { TanStackQueryProvider } from '@/providers/TanStackQueryProvider'



const client = new ApolloClient({
  link: new HttpLink({ uri: "/graphql" }),
  cache: new InMemoryCache(),
});

export const Route = createRootRoute({
  component: () => (
    <ApolloProvider client={client}>
    <TanStackQueryProvider>
      <ThemeProvider defaultTheme="system" storageKey="da-ui-theme">
      <SidebarProvider>
        <AppSidebar />
        <main className='w-screen h-screen'>
          <div className='flex flex-row  items-center justify-start gap-3'>
            <SidebarTrigger className='h-[40px] rounded-none flex flex-row justify-start pl-3' />

          </div>

          <Outlet />
              {/* <TanstackDevtools
            config={{
              position: 'bottom-left',
            }}
            plugins={[
              {
                name: 'Tanstack Router',
                render: <TanStackRouterDevtoolsPanel />,
              },
            ]}
          /> */}
        </main>
      </SidebarProvider>
    </ThemeProvider>
    </TanStackQueryProvider>
    </ApolloProvider>
  ),
})
