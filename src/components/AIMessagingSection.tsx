import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Send, Bot } from "lucide-react";

const AIMessagingSection = () => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!message.trim()) return;
    
    setIsLoading(true);
    // Simulate AI response delay
    setTimeout(() => {
      setIsLoading(false);
      setMessage("");
    }, 1500);
  };

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ask Our AI Assistant
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get instant answers to your medical questions
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-medium">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">MediTash AI</h3>
                  <p className="text-sm text-muted-foreground">
                    Hello, member! What is your concern? Or do you want to study medicine with MediTash?
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <Textarea
                  placeholder="Ask about diseases, symptoms, treatments, or study materials..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="min-h-[100px] resize-none"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                />
                
                <div className="flex justify-end">
                  <Button
                    onClick={handleSendMessage}
                    disabled={!message.trim() || isLoading}
                    className="flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    {isLoading ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </div>
              
              {/* Example Questions */}
              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="font-medium mb-3">Popular Questions:</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "What are the symptoms of pneumonia?",
                    "How to prepare for USMLE?",
                    "Common cardiology conditions",
                    "Study tips for medical students"
                  ].map((question, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => setMessage(question)}
                      className="text-sm"
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AIMessagingSection;