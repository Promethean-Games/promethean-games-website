import learningResources from "@/content/learning-resources.json";
export interface LearningCategory {
  slug: string;
  name: string;
  description: string;
}
export interface LearningSection {
  heading: string;
  paragraphs: string[];
  listTitle?: string;
  items?: string[];
}
export interface LearningFaq {
  question: string;
  answer: string;
}
export interface LearningArticle {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  readTime: string;
  audience: string;
  heroLabel: string;
  intro: string[];
  sections: LearningSection[];
  faq: LearningFaq[];
  related: string[];
}
const resources = learningResources as {
  categories: LearningCategory[];
  articles: LearningArticle[];
};
export const learningCategories = resources.categories;
export const learningArticles = resources.articles;
export function getLearningCategory(slug: string) {
  return learningCategories.find((category) => category.slug === slug);
}
export function getLearningArticle(slug: string) {
  return learningArticles.find((article) => article.slug === slug);
}
export function getRelatedArticles(article: LearningArticle) {
  return article.related
    .map((slug) => getLearningArticle(slug))
    .filter((relatedArticle): relatedArticle is LearningArticle => Boolean(relatedArticle));
}