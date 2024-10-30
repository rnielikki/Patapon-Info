# getQuestCompleteCounter

Gets the quest completing count. DLC Quests call this with Mission ID -1.

Max quest complement amount stored is 100 (`0x64`).

## Code Information

- **Name**: `getQuestCompleteCounter`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 3b 00`
- **Assembly Address in Memory** : `0x894cea0`

## Parameters

- `(int *)destination` *(8 bytes)* : Variable to *store* the quest complement amount.
- `(int)mission_id` *(8 bytes)* : The [Mission ID](./guide/reference-table.md#mission-ids) to retrieve the complement counter.

## Example

Here is one example in hex:

```25 0a 3b 00 / 08 00 00 00 / 1c 00 00 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
getQuestCompleteCounter(((global)int *)giVar28, (int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894cea0(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  uint *puVar2;
  int iVar3;
  uint uVar4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (uint *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = Save::Get_Save_BaseAddr(1);
  iVar3 = return__0x1c(*(undefined4 *)(iVar3 + 0x50));
  uVar4 = Save::Get_Flag_From_Data(iVar3 + 0xedae,*puVar1);
  *puVar2 = uVar4 & 0xff;
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

