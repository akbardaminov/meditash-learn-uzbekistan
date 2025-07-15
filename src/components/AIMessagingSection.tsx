import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Send, Bot } from "lucide-react";
import { useTranslation } from "react-i18next";

const AIMessagingSection = () => {
  const { t } = useTranslation();
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
  return <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-blue-500 md:text-4xl">
            {t('ai.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('ai.subtitle')}
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
                    {t('ai.greeting')}
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <Textarea placeholder={t('ai.placeholder')} value={message} onChange={e => setMessage(e.target.value)} className="min-h-[100px] resize-none" onKeyPress={e => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }} />
                
                <div className="flex justify-end">
                  <Button onClick={handleSendMessage} disabled={!message.trim() || isLoading} className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    {isLoading ? t('common.sending') : t('ai.send')}
                  </Button>
                </div>
              </div>
              
              {/* Example Questions */}
              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="font-medium mb-3">{t('ai.popularQuestions')}:</h4>
                <div className="flex flex-wrap gap-2">
                  {[t('ai.question1'), t('ai.question2'), t('ai.question3'), t('ai.question4')].map((question, index) => <Button key={index} variant="outline" size="sm" onClick={() => setMessage(question)} className="text-sm">
                      {question}
                    </Button>)}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default AIMessagingSection;