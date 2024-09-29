import React from 'react'
import Image from 'next/image'

// shadecn
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// icons
import { Users } from 'lucide-react';
import { Settings } from 'lucide-react';
import { Mail } from 'lucide-react';

export default function TopBar() {
  return (
    <div className='flex items-center justify-between w-full'>
        <div className='flex items-center space-x-2'>
            <Avatar className="w-8 h-8 rounded-none">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className='text-xl font-bold text-black'>pyrees</p>
            <Image src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANkAAACQCAMAAACyNz7gAAAAjVBMVEXxWyUAaTT///8AVADwQQAsLG8qKm4oKG0eHmkjI2v6+vsYGGcgIGri4ukcHGi3t8mvr8Pp6e/Q0NwAAGFSUoXW1uCVlbEAAFvJydc7O3fx8fWNjat8fKBjY46amrTCwtJtbZVJSX9AQHmnp700NHOfn7QsLGkLC2RYWH9aWoZ0dJQ1NW2BgZ4/P3N0dJpzG0CgAAADuElEQVR4nO2aZ6+cOhBAN34PDBhTbYpN8VJuwi37/39eDLcoiSLl5sNsZDRHYpeykn3k2cHtckEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQxFH+PysXclbuZhZxKQspeXSvAu9jlmfaiOvUTldhdJbfpcx7mEnjhywJwyAIwjBhoW/kHUoFN4sKUceUsTZe+r5f4pYxGteiAI9KaDOuy5jGXjcXaxapKFuLufPsnVJz4JKBzYor88tWtETZ1iONPYiKFtGWPrsWsEXDmqVl6NNKWSGp9kt7KGmvVOX7YZmClg1qlpV+XGtyZPrZHvrtO+JE17FfZpCFQ5qllLJuloTvcdfZo3/7LjiRc8cohWw1QDPuh0G/B+HRVoPN9JO9ObxdE9UHoQ+YRuDMoiUOF8L3uitjX2q2sVrbZFbQ7Lr2wRLGIVzyhzOrSroIQppmP7dh9xKRJxK92CCtyOttsdCyAisfzIx7NM72BkttnuB9TkQTPUWNIHlv72b7P4xnMfXA4hHMTCese+0gDish60C6VT2otXu/3Mk7lmioCkCZySlsGzIerzGtI07luBVPxTZKalP+rqP4SJo2nKD6kFBm2Vf/qw3DZrZhFz0+qmGSQfqUBnIa1PNjtAdp8/ErEIDM1C1hwx6MebbZPpUwkg4mfUnNQKURtp/VH2OZfGDJTcFUAcgsZ7R8O+Vik7nY0m9DNmXDt3QTudzEe+IoKQMargGZFXVgiB1CH/+zOTGj0YMet9F+Po6G7V0sZZ9K0sc1UM8YyGwuk5ttuTGr9Noo/jxVa6XNZHS1Di/PXDWrrrLRttYtKWeYKgCZdcyrjyjLZTU9bHqcjfYDGvjaDKPeHtpKvj6uPdbBVAHIrE9+GKNwfW27ovY9z/PrpmuvP4w60zLpYaoAZCbCOldcNmmazWs1rPNqW3GH3ez5UA1zlqaj5DmvYwFThX9ktjprdt5o/F0G2Sd2POczyHmzflHH/Tnf1H/Ru0rc6l19ukecuNYjfh+fFL+MYmLnRzGfHXku7o08zztbcOIZnvPOyn1uJnVxcSbVxuNvZr/lT7PfcLEIu2Ix+n9asRgBS4deZQpOucr0ujLon3Fl8FjNpWUrluhsq7nHCnxwyhX4j10TyceuieQkuyZ2TrrT5eCsu5MOTrqj7F9w+e+sXL6cFTRzDzRzDzRzDzRzDzRzDzRzDzRzDzRzDzRzDzRzDzRzDzRzDzRzDzRzDzRzDzRzDzRzDzRzDzRzDzRzDzRzDzRzDzRzj+/WYN5vAJYnRgAAAABJRU5ErkJggg==' alt='image' width={20} height={20} className='rounded-sm'/>
        </div>
        <div className='flex items-center space-x-4'>
            {settingInfo.map((icon, index) => (
                <div key={index} className='hover:cursor-pointer'>
                    {icon}
                </div>
            ))}
        </div>
    </div>
  )
}

const settingInfo = [
    <Users size='24' className='text-black'/>,
    <Mail size='24' className='text-black'/>,
    <Settings size='24' className='text-black'/>
]
