"use client";

import StudioButton from "@/components/studio/core/StudioButton";
import StudioEmptyState from "@/components/studio/core/StudioEmptyState";
import {
  StudioTable,
  StudioTableRow,
  StudioTableCell,
} from "@/components/studio/core/StudioTableRow";
import StudioBadge from "@/components/studio/core/StudioBadge";
import useStudioPublications from "@/hooks/useStudioPublications";
import Image from "next/image";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { AiOutlinePlus, AiOutlineSwitcher } from "react-icons/ai";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import HeaderBar from "@/components/layouts/HeaderBar";

dayjs.extend(relativeTime);

const TABLE_HEADERS = ["Article", "Author", "Published", "Actions"];

const StudioPublicationsPage = () => {
  const { publications, isLoading, error } = useStudioPublications();

  return (
    <div className="min-h-screen">
      <HeaderBar
        title="Publications"
        description="Manage your articles and content"
      />

      {error && (
        <div className="mx-6 mt-4 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-xs text-red-500">
          {error}
        </div>
      )}

      {isLoading ? (
        <div className="mt-4 space-y-1 px-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="h-14 animate-pulse rounded-xl bg-zinc-100"
            />
          ))}
        </div>
      ) : (
        <div className="mt-2">
          <StudioTable
            headers={TABLE_HEADERS}
            isEmpty={publications.length === 0}
            empty={
              <StudioEmptyState
                icon={AiOutlineSwitcher}
                title="No publications yet"
                description="Write your first article and share your ideas with the world."
                action={
                  <StudioButton icon={AiOutlinePlus} variant="primary">
                    Write First Article
                  </StudioButton>
                }
              />
            }
          >
            {publications.map((pub) => (
              <StudioTableRow key={pub.id}>
                {/* Article info */}
                <StudioTableCell>
                  <div className="flex items-center gap-3">
                    <div className="relative h-9 w-14 shrink-0 overflow-hidden rounded-lg bg-zinc-100">
                      <Image
                        src={pub.image}
                        alt={pub.title}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-zinc-800 line-clamp-1">
                        {pub.title}
                      </p>
                      <p className="text-[10px] text-zinc-400 line-clamp-1 max-w-[200px]">
                        {pub.content}
                      </p>
                    </div>
                  </div>
                </StudioTableCell>

                {/* Author */}
                <StudioTableCell>
                  <StudioBadge variant="info">@{pub.user.username}</StudioBadge>
                </StudioTableCell>

                {/* Published date */}
                <StudioTableCell className="whitespace-nowrap text-zinc-400">
                  {dayjs(pub.createdAt).fromNow()}
                </StudioTableCell>

                {/* Actions */}
                <StudioTableCell>
                  <div className="flex items-center gap-1">
                    <StudioButton variant="ghost" size="sm" icon={FiEdit2}>
                      Edit
                    </StudioButton>
                    <StudioButton variant="danger" size="sm" icon={FiTrash2}>
                      Delete
                    </StudioButton>
                  </div>
                </StudioTableCell>
              </StudioTableRow>
            ))}
          </StudioTable>
        </div>
      )}
    </div>
  );
};

export default StudioPublicationsPage;
