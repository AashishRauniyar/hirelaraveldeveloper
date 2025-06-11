import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface SuccessModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex justify-center mb-4">
            <CheckCircle2 className="h-16 w-16 text-green-500" />
          </div>
          <DialogTitle className="text-center text-2xl font-semibold">
            Thank You!
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Your message has been received. Our team will review it and get back to you within 24 hours.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center mt-4">
          <Button
            onClick={onClose}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
} 