
import { Mail } from 'lucide-react';
import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export default function InvitationDialogContent() {
  return (
    <>
      <DialogHeader>
        <DialogTitle className="flex items-center text-primary">
          <Mail className="mr-2 h-5 w-5" />
          Extend an Invitation to Bataan
        </DialogTitle>
        <DialogDescription className="text-muted-foreground">
          Use this template to invite someone to explore Bataan with you.
        </DialogDescription>
      </DialogHeader>
      <div className="prose prose-sm max-w-none text-foreground py-4">
        <p>Dearest [Friend's Name],</p>
        <br />
        <p>I hope this letter finds you well!</p>
        <p>
          I'm so excited to invite you on an adventure to the beautiful
          province of Bataan. I've been wanting to explore its rich history and
          stunning natural landscapes, and I immediately thought of sharing
          this experience with you. I've even started to sketch out a potential itinerary!
        </p>
        <p>
          We could start in <strong>Balanga City</strong>. Imagine us checking into The Plaza Hotel, right in the heart of the city. From there, we could explore the historic Plaza Mayor de Ciudad de Balanga and delve into history at the Bataan World War II Museum. For a touch of nature, the Balanga Wetland and Nature Park offers a chance to see diverse birdlife, and there's always SM City Bataan for any essentials or a quick bite.
        </p>
        <p>
          Then, for a change of pace, we could head to <strong>Morong</strong>. Picture us relaxing on its beautiful beaches! We could stay at a lovely place like Verde Azul Leisure Resort or Morongstar Hotel and Resort, enjoying the coastal charm and maybe even just strolling along the shore and taking in the sea breeze.
        </p>
        <p>
          I was thinking we could plan a trip around [Suggest a month or
          specific dates, e.g., "the long weekend in October" or "sometime in
          November"]. Of course, I'm flexible and we can figure out dates
          that work best for both of us.
        </p>
        <p>
          Imagine the stories we'll create and the memories we'll make, from historical explorations to seaside relaxation! It
          would be wonderful to have you join me.
        </p>
        <p>Let me know what you think, and we can start planning the details.</p>
        <br />
        <p>Warmly,</p>
        <p>[Your Name]</p>
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button type="button" variant="outline">
            Close
          </Button>
        </DialogClose>
      </DialogFooter>
    </>
  );
}
