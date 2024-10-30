# setLinkInfo

Sets a link information to the attached element.

Used in e.g. Ravenous riding back of the dragon.

## Code Information

- **Name**: `setLinkInfo`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 4a 00`
- **Assembly Address in Memory** : `0x8915f00`

## Parameters

- `(int *)handle_id` *(8 bytes)* : The target [handle](./guide/how-to-get-a-handle.md) of the *attached object*.
- `(int)set_flag` *(8 bytes)* : 0 disables the flag, 1 enables the flag.
- `(uint)flag` *(8 bytes)* : Specific flag to enable/disable, expected 1~31.

|ID|if 0|if 1|
|---|---|---|
|`0x1`|???|??? (can be position related?)|
|`0x2`|???|???|
|`0x3`|No link animation to parent|Link animation to parent|
|`0x5`|No flip to parent direction|**Flip** to parent direction|
|`0x7`|Render related|render related|

Practically, only 0, 1, 2, 5 are observed.

For reference, Ravenous riding the dragon before applying this was `0xC7`.

## Example

Here is one example in hex:

```25 17 4a 00 / 04 00 00 00 / 00 00 00 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setLinkInfo((int *)iVar0, (int)0, (int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08915f00(int param_1,undefined4 param_2)

{
  int *piVar1;
  int *piVar2;
  uint *puVar3;
  int iVar4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (uint *)Pac_Get_Param(param_2,2,1,4);
  if (*piVar1 != -1) {
    iVar4 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*piVar1,1);
    if (iVar4 == 0) {
      iVar4 = 0;
    }
    /* flag 1 related to 887f130, flag 5 related to flip */
    if (iVar4 != 0) {
      if (*piVar2 == 0) {
        *(uint *)(iVar4 + 0x120) = *(uint *)(iVar4 + 0x120) & ~(1 << (*puVar3 & 0x1f));
      }
      else {
        *(uint *)(iVar4 + 0x120) = *(uint *)(iVar4 + 0x120) | 1 << (*puVar3 & 0x1f);
      }
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

