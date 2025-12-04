import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";


import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/infra/sideBar/sidebar';
import { ThemeProvider } from '@/infra/tema/theme-provider';
import { Outlet, createRootRoute } from '@tanstack/react-router';



const client = new ApolloClient({
  link: new HttpLink({ uri: "/graphql" }),
  cache: new InMemoryCache(),
});

export const Route = createRootRoute({
  component: () => (
    <ApolloProvider client={client}>
        <ThemeProvider defaultTheme="system" storageKey="da-ui-theme">
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset className="overflow-hidden">
              <main className='w-full h-screen'>

                <div className='flex flex-row  items-center justify-start gap-3'>
                  <SidebarTrigger className='h-[40px] rounded-none flex flex-row justify-start pl-3' />
                </div>

                <Outlet />

              </main>
            </SidebarInset>
          </SidebarProvider>
      </ThemeProvider>
    </ApolloProvider>
  ),
})
