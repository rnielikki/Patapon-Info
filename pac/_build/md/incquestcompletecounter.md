# incQuestCompleteCounter

Adds 1 to quest completing count. DLC Quests call this with Mission ID -1.

Max quest complement amount stored is 100 (`0x64`).

## Code Information

- **Name**: `incQuestCompleteCounter`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 3c 00`
- **Assembly Address in Memory** : `0x894cf34`

## Parameters

- `(int)mission_id` *(8 bytes)* : The [Mission ID](./guide/reference-table.md#mission-ids) to increment the completing counter.

## Example

Here is one example in hex:

```25 0a 3c 00 / 08 00 00 00 / 1c 00 00 00```

Which is interpreted as:

```c
incQuestCompleteCounter(((global)int *)giVar28)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894cf34(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  
                    // get quest counter addr
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  iVar2 = Save::Get_Save_BaseAddr(1);
  iVar2 = return__0x1c(*(undefined4 *)(iVar2 + 0x50));
  FUN_089feaf0(iVar2 + 0xedae,*puVar1);
  iVar2 = Get_Some_Flag(1);
  Increment_QuestCounter(*(undefined4 *)(iVar2 + 0x54),*puVar1);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

