# getBossActionId

Gets ID of the action that the boss is currently performing.

## Code Information

- **Name**: `getBossActionId`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 21 05 00`
- **Assembly Address in Memory** : `0x89b1598`

## Parameters

- `(int)unique_id` *(8 bytes)* : ID from [setReqActorUniqueId](./setreqactoruniqueid.md). Usually it is 100 (0x64) in 1v1 DLC bosses.
- `(bool *)action_id` *(8 bytes)* : Variable to *store* the current [Action ID](./guide/reference-table.md#action-ids).

## Example

Here is one example in hex:

```25 21 05 00 / 02 00 00 00 / 64 00 00 00 / 04 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
getBossActionId((int)100, (int *)iVar1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089b1598(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = *(int *)(param_1 + 0x10);
  if (iVar3 == 0) {
    iVar3 = 0;
  }
  else {
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    iVar3 = Get_Squad_From_ReqUniqueID(*(undefined4 *)(iVar3 + 0xf8),*puVar1);
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    else {
      iVar3 = FUN_0896d6e0(*(undefined4 *)(iVar3 + 0x708));
      if (iVar3 == 0) {
        iVar3 = 0;
      }
    }
  }
  if (iVar3 != 0) {
    *puVar2 = *(undefined4 *)(iVar3 + 0x29c);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

