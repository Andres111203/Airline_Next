import {
  Footer,
  FooterColumn,
  FooterBottom,
  FooterContent,
} from "@/components/ui/footer";
import LaunchUI from "@/components/logos/launch-ui";

export default function FooterSection() {
  return (
    <footer className="w-full bg-background px-4 py-2">
      <div className="mx-auto max-w-container bg-slate-400">
        <Footer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 bg-slate-400">
          <FooterContent className="col-span-1 sm:col-span-2 md:col-span-1">
            <FooterColumn className="flex items-center gap-2">
              <p className="h6"><strong>Contactanos</strong></p>
            </FooterColumn>
          </FooterContent>
          
          <FooterColumn>
            <h3 className="text-md pt-1 font-semibold">Product</h3>
            <a href="/" className="text-sm text-muted-foreground">
              Changelog
            </a>
            <a href="/" className="text-sm text-muted-foreground">
              Documentation
            </a>
          </FooterColumn>

          <FooterColumn>
            <h3 className="text-md pt-1 font-semibold">Company</h3>
            <a href="/" className="text-sm text-muted-foreground">
              About
            </a>
            <a href="/" className="text-sm text-muted-foreground">
              Careers
            </a>
            <a href="/" className="text-sm text-muted-foreground">
              Blog
            </a>
          </FooterColumn>

          <FooterColumn>
            <h3 className="text-md pt-1 font-semibold">Contact</h3>
            <a href="/" className="text-sm text-muted-foreground">
              Discord
            </a>
            <a href="/" className="text-sm text-muted-foreground">
              Twitter
            </a>
            <a href="/" className="text-sm text-muted-foreground">
              Github
            </a>
          </FooterColumn>
          <div></div>
        </Footer>

       
      </div>
    </footer>
  );
}
